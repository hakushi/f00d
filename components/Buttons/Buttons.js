import Button from "../Button/Button";

const Buttons = ({ hasList, handlers }) => {
  const { yes, no } = handlers;
  return (
    <>
      <style jsx>
        {`
          .button-group {
            display: flex;
            flex-direction: row;
            width: 70vw;
          }
          @media screen and (max-width: 600px) {
            .button-group {
              width: 100vw;
              flex-direction: column;
              align-items: center;
            }
          }
        `}
      </style>
      <div className="button-group">
        <Button
          text="Visa inköpslista 👍"
          className="yes-button"
          handler={yes}
          disabled={!hasList}
        />
        <Button
          text="Nej tack 😬"
          type="no"
          className="no-button"
          handler={no}
        />
      </div>
    </>
  );
};

export default Buttons;
