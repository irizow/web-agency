export const isMobile = () => window.matchMedia && window.matchMedia("(max-width: 750px)").matches

export default isMobile;