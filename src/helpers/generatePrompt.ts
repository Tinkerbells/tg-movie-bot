export const generatePrompt = (torrentName: string) => {
  return `Get the show name from it "${torrentName}" with release date, translate it to english and check if it's a show or not.
  Provide a  RFC8259 compliant JSON response following this format without deviation.
  {
    "title": "show title",
    "isShow": "true",
  }
  The JSON response:`;
};
