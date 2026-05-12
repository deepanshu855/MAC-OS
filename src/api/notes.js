const fetchData = async () => {
  const res = await fetch("/note.txt");
  const text = await res.text();

  return text;
};

export default fetchData;
