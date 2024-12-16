import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Get the pathname from the URL
  const { pathname } = new URL(request.url);

  // Handle different auth routes
  if (pathname.endsWith('/login')) {
    // Redirect to GitHub OAuth
    const githubUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`;
    return NextResponse.redirect(githubUrl);
  }

  if (pathname.endsWith('/callback')) {
    // Handle GitHub callback
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');

    // Exchange code for token
    const tokenRes = await fetch(
      'https://github.com/login/oauth/access_token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        }),
      }
    );

    const { access_token } = await tokenRes.json();

    // Set cookie and redirect to home
    const response = NextResponse.redirect('http://localhost:3000');
    response.cookies.set('github_token', access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 24 hours
    });

    return response;
  }

  return NextResponse.redirect('/');
}
