import GitHubCalendar from "react-github-calendar";
const selectLastHalfYear = (contributions) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 8;

  return contributions.filter((day) => {
    const date = new Date(day.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};

function Github() {
  return (
    <GitHubCalendar
      style={{
        maxWidth: "100%",
        margin: "0 auto",
        paddingTop: "18px",
        textAlign: "center",
      }}
      username="FathyMuhamed"
      colorScheme="light"
      transformData={selectLastHalfYear}
      blockSize={8}
      hideColorLegend
      fontSize={14}
    />
  );
}

export default Github;
