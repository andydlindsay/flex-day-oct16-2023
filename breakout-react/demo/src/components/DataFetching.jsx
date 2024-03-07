import {useEffect, useState} from 'react';

const DataFetching = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/api/topics')
      .then((res) => res.json())
      .then((topics) => {
        console.log(topics);
        setTopics(topics);
      });
  }, []);

  const mappedTopics = topics.map((topic) => {
    return <p key={topic.id}>{topic.title}</p>;
  });

  return (
    <div>
      <h2>Data Fetching Component</h2>

      { mappedTopics }
    </div>
  );
};

export default DataFetching;
