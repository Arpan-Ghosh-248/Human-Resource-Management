export const truncateString = (string, maximum_count) => {
    if (string && string.length > maximum_count) {
        return string.slice(0, maximum_count).concat('...');
    } else {
        return string;
    }
};

export const getDateTimeFormat = (date, isDateTime = true) => {
    const stringDate = new Date(date);
    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(stringDate);
    const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(stringDate);
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(stringDate);
    const time = new Intl.DateTimeFormat('en', { hour: '2-digit', minute: '2-digit' }).format(stringDate);
    return isDateTime ? `${year}/${month}/${day} ${time}` : `${year}-${month}-${day}`;
};

export const getDateFormat = (date, isDateTime = true) => {
    const stringDate = new Date(date);
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(stringDate);
    const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(stringDate);
    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(stringDate);
    return isDateTime ? `${year}/${month}/${day}` : `${year}-${month}-${day}`;
};
export const getValueOption = (options, key) => {
    const option = options.find(o => o.key === key);
    return option ? option.value : '';
};

export const getStatusColor = (options, key) => {
    const color = options.find(x => x.key === key);
    return color ? color.value : '#000';
};

export const titleCase = str => {
    if (!str) return ''
    if (!str.includes('_')) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase()
    }
    return str
        .split('_')
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}