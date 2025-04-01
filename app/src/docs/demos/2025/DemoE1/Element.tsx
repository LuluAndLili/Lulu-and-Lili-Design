import "./Style.scss";

/* Imported Components */
import { ContainerWidthSensor } from "../../../../components/functions/ContainerSizeSensor";
import { Button } from "../../../../components/buttons/Button";

interface DemoGridProps {
  items: React.ReactNode[];
  res: {
    width: number;
    columnCount: number;
  }[];
}

const DemoDisplayGrid: React.FC<DemoGridProps> = ({ items, res }) => {
  const { containerWidth, ref } = ContainerWidthSensor();

  let columnCount = 10;

  for (let index = 0; index < res.length; index++) {
    const column = res[index];
    if (containerWidth <= column.width) {
      columnCount = column.columnCount;
    }
  }

  return (
    <>
      <div
        ref={ref}
        className="demo-grid"
        style={{ gridTemplateColumns: `repeat(${columnCount}, 1fr)` }}
      >
        {items.map((item, index) => (
          <div key={index} className={`column column-${item}`}>
            <div className={`item item-${index}`}>{item}</div>
          </div>
        ))}
      </div>
    </>
  );
};

const Items = [
  <Button label="Button 1" onClick={() => alert("Button 1 clicked")} />,
  <Button label="Button 2" onClick={() => alert("Button 2 clicked")} />,
  <Button label="Button 3" onClick={() => alert("Button 3 clicked")} />,
  <Button label="Button 4" onClick={() => alert("Button 4 clicked")} />,
  <Button label="Button 5" onClick={() => alert("Button 5 clicked")} />,
  <Button label="Button 6" onClick={() => alert("Button 6 clicked")} />,
  <Button label="Button 7" onClick={() => alert("Button 7 clicked")} />,
  <Button label="Button 8" onClick={() => alert("Button 8 clicked")} />,
  <Button label="Button 9" onClick={() => alert("Button 9 clicked")} />,
  <Button label="Button 10" onClick={() => alert("Button 10 clicked")} />,
];

const Element = () => {
  return (
    <DemoDisplayGrid
      items={Items}
      res={[
        { width: Infinity, columnCount: 10 },
        { width: 1200, columnCount: 5 },
        { width: 800, columnCount: 4 },
        { width: 600, columnCount: 3 },
        { width: 400, columnCount: 2 },
        { width: 200, columnCount: 1 },
      ]}
    />
  );
};

export default Element;
