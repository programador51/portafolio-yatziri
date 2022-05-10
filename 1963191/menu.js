function createMenuHomeworkList() {
  const containerHomeworks = document.getElementById("homeworkOptions");
  containerHomeworks.innerHTML = generateHtmlXrsHomeworkOptions();

  function generateHtmlXrsHomeworkOptions() {
    let dangerousHtml = "";
    for (let i = 0; i < 23; i++) {
      dangerousHtml += `<a href="tarea${i + 1}.html?tarea=${i + 1}">Tarea ${
        i + 1
      }</a>`;
    }
    return dangerousHtml;
  }
}

function createNavigationHomework() {
  const { tarea } = getQuerySearch();
  const noHomework = +tarea;

  createPrevPage();
  createNextPage();

  function createPrevPage() {
    const prevHomework = document.getElementById("prev-homework");

    if (prevHomework && noHomework - 1 > 0) {
      prevHomework.setAttribute(
        "href",
        `tarea${noHomework - 1}.html?tarea=${noHomework - 1}`
      );
      prevHomework.innerText = `👈🏼 T${noHomework - 1}`;
    }
  }

  function createNextPage() {
    const prevHomework = document.getElementById("next-homework");
    if (prevHomework && noHomework + 1 < 23) {
      prevHomework.setAttribute(
        "href",
        `tarea${noHomework + 1}.html?tarea=${noHomework + 1}`
      );
      prevHomework.innerText = `👉🏼 T${noHomework + 1}`;
    }
  }
}

function getQuerySearch() {
  const urlParams = window.location.search.replaceAll("?", "").split("&");
  const querySearch = urlParams.reduce((params, param) => {
    const [key, value] = param.split("=");
    return {
      ...params,
      [key]: value,
    };
  }, {});

  return querySearch;
}

createMenuHomeworkList();
createNavigationHomework();
