import "./Style.scss";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <div onClick={onClick} className="lully-demo-e1__button">
      {label}
    </div>
  );
};

const Element = () => {
  return (
    <div className="lully-demo-e1">
      <div className="lully-demo-e1__container">
        <div className="lully-demo-e1__header">
          <h1>Demo Title Gose Here</h1>
          <article>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam repellendus iure sapiente quod aliquid dolorem corporis
              maiores cupiditate culpa officia! Voluptate, exercitationem
              adipisci? Blanditiis iure inventore ab ullam, quod vel!
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Element;
