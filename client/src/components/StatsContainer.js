import { useAppContext } from '../context/appContext'
import StatItem from './StatItem'
import {
  FaSuitcaseRolling,
  FaCalendarCheck,
  FaBug,
  TbPlugConnectedX,
} from "react-icons/fa";
import Wrapper from '../assets/wrappers/StatsContainer'

const StatsContainer = () => {
  const { stats } = useAppContext();

  const defaultStats = [
    {
      Label_name: "Total Expense",
      title: "Bike",
      count: stats.Bike || 0,
      icon: <FaSuitcaseRolling />,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
    {
      Label_name: "Money Lent",
      title: "Money Lent",
      count: stats.declined || 0,
      icon: <FaSuitcaseRolling />,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      Label_name: "Money Borrowed",
      title: "Money Borrowed",
      count: stats.declined || 0,
      icon: <FaSuitcaseRolling />,
      color: "#e9b949",
      bcg: "#fcefc7",
    },
  ];

  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />
      })}
    </Wrapper>
  )
}

export default StatsContainer
