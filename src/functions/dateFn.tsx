const formatDate = (input: string) => {
    // Parse the date
    const date = new Date(input);

    // Arrays to map day and month numbers to their string representations
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // Construct the formatted string
    return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;
}

export default formatDate;