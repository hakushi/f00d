import Button from "../Button/Button";

const Buttons = ({ hasShoppingList, showList, handlers }) => {
  const { yes, no } = handlers;
  return (
    <>
      <style jsx>
        {`
          .button-group {
            display: flex;
            flex-direction: row;
            width: 70vw;
            justify-content: center;
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
        {!showList && (
          <Button
            text="Visa inköpslista 👍"
            className="yes-button"
            handler={yes}
            disabled={!hasShoppingList}
          />
        )}
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
