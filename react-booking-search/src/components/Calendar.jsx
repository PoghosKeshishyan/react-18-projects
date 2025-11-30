import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

const Calendar = () => {
  return (
    <div className="Calendar">
      <RangePicker />
    </div>
  )
}

export default Calendar;