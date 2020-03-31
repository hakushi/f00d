const Button = ({ className, disabled = false, handler, text }) => (
  <>
    <style jsx>
      {`
        .button {
          height: 80px;
          padding: 10px;
          margin: 10px;
          width: 50vw;
          font-size: 2.6rem;
          font-family: lato, verdana;
          cursor: pointer;
          border: 0;
          border-radius: 8px;
          outline: none;
          background-color: #992680;
          color: #fff;
        }
        @media screen and (max-width: 8§00px) {
          .button {
            width: 50vw;
            font-size: 2rem;
          }
        }
        @media screen and (max-width: 400px) {
          .button {
            width: 90vw;
            font-size: 1.5rem;
          }
        }
        .yes-button {
          background-color: #0bb04f;
        }
        .yes-button:hover {
          background-color: #0dd15e;
        }
        .yes-button:disabled {
          color: #333;
          background-color: rgba(13, 209, 94, 0.1);
        }
        .no-button {
          background-color: #820719;
        }
        .no-button:hover,
        .no-button:active {
          background-color: #a80820;
        }
      `}
    </style>
    <button
      className={`button ${className ? className : ""}`}
      disabled={disabled}
      onClick={handler}
    >
      {text}
    </button>
  </>
);

export default Button;
