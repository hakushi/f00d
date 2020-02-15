const RecipieLink = ({ url }) => (
  <>
    <style jsx>
      {`
        .link {
          font-size: 1.5rem;
          color: #fff;
          margin-bottom: 16px;
        }
      `}
    </style>
    <a className="link" href={url} target="_blank" rel="noopener noreferrer">
      Öppna receptet &raquo;
    </a>
  </>
);

export default RecipieLink;
