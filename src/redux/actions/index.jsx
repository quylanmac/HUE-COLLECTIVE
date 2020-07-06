export const setColor = content => ({
    type: 'CHANGE',
    color: {
        content
    }
});
export const setTheme = content => ({
   
    type: 'THEME',
    theme: {
        content
    }
});