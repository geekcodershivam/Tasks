const getformttedHTML = (card,title,classname) => {
  if (!card.entities) {
    return (
      <div
        className={classname}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    );
  } else {
    let str = card.text;
    card.entities.map(
      (item) =>
        (str = str.replace('{}', `${item.text.fontcolor(item.color)}`))
    );

    return (
      <div className={classname} dangerouslySetInnerHTML={{ __html: str }} />
    );
  }
};

export default getformttedHTML;