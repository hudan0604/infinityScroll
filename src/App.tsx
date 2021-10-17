import { useEffect, useRef, useState } from "react";
import "./App.scss";
import { PlayersMock } from "./common/mocks/playerMock";
import Loader from "./ui-components/Loader";

function App() {
  const [players, setPlayers] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const lastItem = useRef(null);

  const fetchUsers = () => {
    page > 1
      ? setPlayers([...players, ...PlayersMock.results[page - 1]?.players])
      : setPlayers(PlayersMock.results[0]?.players);

    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const callback = (entries: any) => {
    if (page < 5) {
      if (entries[0].isIntersecting) {
        setLoading(true);
        // useful just to see the animation effect between two pages
        setTimeout(() => {
          setPage(page + 1);
        }, 1000);
      }
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  useEffect(() => {
    const current = lastItem.current;
    const observer = new IntersectionObserver(callback, options);
    if (lastItem.current) observer.observe(current as any);
    return () => {
      if (current) observer.unobserve(current as any);
    };
  });

  return (
    <div className="App">
      <h1>List of players</h1>
      {players?.map((player: any, index: number) => (
        <div
          className="User"
          ref={index === players?.length - 1 && page <= 5 ? lastItem : null}
          key={`player-${index}`}
        >
          <p>Player #{index + 1}</p>
          {Object.keys(player).map((key, index) => (
            <p key={`property-${index}`}>
              {key}: {player[key]}
            </p>
          ))}
        </div>
      ))}
      {loading && <Loader />}
    </div>
  );
}

export default App;
