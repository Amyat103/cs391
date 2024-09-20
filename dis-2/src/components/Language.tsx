import './language.css';

type Language = {
  name: string;
  company: string;
  year: number;
};

export function Language({ name, company, year }: Language) {
  return (
    <div>
      <h3>{name}</h3>
      <h4>{company}</h4>
      <p>{year}</p>
    </div>
  );
}

export default Language;
