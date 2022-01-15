const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  console.log(event.target.value);
};

const EventComponent: React.FC = () => {
  return (
    <div>
      <input onChange={onChange} />
    </div>
  );
};

export default EventComponent;
