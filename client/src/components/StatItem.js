import Wrapper from '../assets/wrappers/StatItem'

const StatsItem = ({ count, Label_name,title, icon, color, bcg }) => {
  return (
    <Wrapper color={color} bcg={bcg}>
      <header>
        <span className="count">{count}</span>
        <span className="icon">{icon}</span>
      </header>
      <h5 className="Label_name">{Label_name}</h5>
    </Wrapper>
  );
};

export default StatsItem
