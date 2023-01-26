import cytoscape from "cytoscape";
import { useEffect, useRef, useState } from "react";

export default function MyCytoScape() {
  const container = useRef(null);

  const [core, setCore] = useState();

  useEffect(() => {
    const config = {
      container: container.current,
      style: [
        // {
        //   selector: "node",
        //   style: {
        //     content: "data('n1')",
        //     shape: "round-rectangle",
        //     "background-color": "red",
        //   },
        // },
      ],
      elements: [
        { data: { id: "n1" } },
        // { data: { id: "n2" } },
        // { data: { id: "e1", source: "n1", target: "n2" } },
      ],
    };

    const a = cytoscape(config);
    console.log(a);
    setCore(a);
  }, []);

  function addNode() {
    console.log("sssss");
    // core.add({
    //   group: "nodes",
    //   data: { id: `${Math.floor(Math.random() * 40000)}` },
    //   position: { x: 100, y: 100 },
    //   style: {
    //     "background-color": "red",
    //   },
    // });

    core.add({
      group: "nodes",
      data: { id: `${Math.floor(Math.random() * 12121221)}` },
      position: { x: 100, y: Math.floor(Math.random() * 100) },
      selected: true,
      style: {
        shape: "rectangle",
        width: "200px",
        "background-color": "red",
        opacity: "0.3",
      },
    });
  }

  return (
    <div>
      <div ref={container} style={{ height: "500px", width: "500px" }} />
      <button onClick={addNode}> click</button>
    </div>
  );
}
