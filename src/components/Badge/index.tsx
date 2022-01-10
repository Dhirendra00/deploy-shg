const Badge = ({ title, color }) => {
  return (
    <span
      className={`ml-2 px-3 py-2 text-base ${color} rounded-lg text-white uppercase`}
    >
      {title}
    </span>
  );
};
export default Badge;
