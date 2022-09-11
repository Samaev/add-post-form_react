export default function InputForm() {
  return (
    <>
      <div>InputForm</div>
      <form action="">
        <div>
          <input 
           placeholder="Ваше имя:"
           type="text" />
        </div>
        <div>
          <input type="text" placeholder="Введите ссылку на свою аватарку" />
        </div>
        <div>
          <textarea
          placeholder="Текст поиска"
          cols={30} rows={10}></textarea>
        </div>
        <button type="submit">Добавить</button>
      </form>
    </>
  );
}
