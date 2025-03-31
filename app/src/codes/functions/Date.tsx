export const DateFormatter = (
  date: [number, number, number],
  format?: Intl.DateTimeFormatOptions
): { year: string; mon: string; day: string } => {
  const [year, month, day] = date;
  // Construct a Date object using the provided year, month, and day.
  const dateObj = new Date(year, month - 1, day);

  // Set the options for date formatting; use the provided format or default to a specific format if none is provided.
  const options: Intl.DateTimeFormatOptions = format ?? {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  // **Change locale to "en-GB" to match the expected format**
  const formattedDate = dateObj.toLocaleDateString("en-GB", options);

  // Handle the case where the full format might not yield the expected splits.
  const parts = formattedDate.replace(",", "").split(" ");

  // Determine the positions based on "en-GB" formatted dates
  let yearPart = "";
  let monthPart = "";
  let dayPart = "";

  // Assign properly based on the number of parts received
  if (parts.length === 3) {
    [dayPart, monthPart, yearPart] = parts;
  } else if (parts.length === 2) {
    if (options.year) {
      // Year is likely missing, so assign positions for month and day
      [dayPart, monthPart] = parts;
      yearPart = ""; // Default to empty if year is absent
    } else {
      // If there's no month, assume incorrect usage and throw an error
      throw new Error("Unexpected date format; can't split into components.");
    }
  } else {
    throw new Error("Unexpected date format; can't split into components.");
  }

  return {
    year: yearPart,
    mon: monthPart,
    day: dayPart,
  };
};

export const DateFormatterText: React.FC<{
  date: [number, number, number];
}> = ({ date }) => {
  return (
    <span>
      {DateFormatter(date).mon} {DateFormatter(date).day},{" "}
      {DateFormatter(date).year}
    </span>
  );
};

export function GetTodayDate(): { year: string; month: string; day: string } {
  const today = new Date();
  const year = today.getFullYear().toString();

  // Add leading zero if month is less than 10
  const month = (today.getMonth() + 1).toString().padStart(2, "0");

  // Add leading zero if day is less than 10
  const day = today.getDate().toString().padStart(2, "0");

  return {
    year: year,
    month: month,
    day: day,
  };
}

export function GetWeekDay(dateArray: [number, number, number]): string {
  const [year, month, day] = dateArray;

  // Create a Date object using the input. Note that JavaScript's Date months are zero-indexed.
  const date = new Date(year, month - 1, day);

  // Define an array mapping the getDay() output to weekday names.
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Use getDay() method to find the day of the week.
  const dayOfWeek = date.getDay();

  // Return the corresponding day name.
  return weekDays[dayOfWeek];
}
