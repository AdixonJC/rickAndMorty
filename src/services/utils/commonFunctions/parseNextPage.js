export const parseNextPage = (url) => {
  try {
    if (url) {
    const objURL = typeof (url) === "string" ? new URL(url) : null;
    if (objURL) {
      const searchParams = objURL.searchParams;
    console.log(objURL);
    const urlParams = new URLSearchParams(searchParams);
    const getNumberPage = urlParams.get("page");
    const numberPage = +getNumberPage;
    return numberPage
    } else {
      throw new Error("se jodio en el segundo if")
    }
    }
  } catch (error) {
    throw Error("se jodio en el segundo if");
  }
};
