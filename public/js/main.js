const dataUrl = "./data/content.json";

async function getSiteData() {
  try {
    const navbar = document.getElementById("navBarItems");
    const mnavbar = document.getElementById("mobileNavContent");
    const topCards = document.getElementById("infoCards");
    const tableInfoCards = document.getElementById("tableInfoCards");
    const ticketDetails = document.getElementById("ticketList");
    const taskDetails = document.getElementById("taskList");

    const getData = await fetch(dataUrl);
    const data = await getData.json();

    data.navbar.forEach((navItem) => {
      const div = document.createElement("div");

      if (navItem.id === 1) {
        div.className =
          "d-flex p-2 py-3 gap-2 sidenavItem justify-content-start align-items-center mb-1 overview";
      } else {
        div.className =
          "d-flex p-2 py-3 gap-2 sidenavItem justify-content-start align-items-center mb-1";
      }

      div.setAttribute("data-key", navItem.id);
      div.innerHTML = `
        <div class="icon">
          <img
            src="${navItem.icon}"
            alt="logo"
            class="img-fluid"
          />
        </div>
        <div class="fs-6">${navItem.title}</div>
      `;

      navbar.appendChild(div);

      if (navItem.id === 6) {
        const hr = document.createElement("hr");
        hr.className = "w-100 m-0 hr mb-1";
        navbar.appendChild(hr);
      }

      const mdiv = document.createElement("div");

      mdiv.className =
        "d-flex p-2 py-3 gap-2 sidenavItem justify-content-start align-items-center mb-1";

      mdiv.setAttribute("data-key", navItem.id);
      mdiv.innerHTML = `
          <div class="icon">
            <img
              src="${navItem.icon}"
              alt="logo"
              class="img-fluid"
            />
          </div>
          <div class="fs-6">${navItem.title}</div>
        `;

      mnavbar.appendChild(mdiv);

     if (navItem.id === 6) {
        const hr = document.createElement("hr");
        hr.className = "w-100 m-0 hr mb-1";
        mnavbar.appendChild(hr);
      }

    });

    data.topCard.forEach((cardDetails) => {
      const div = document.createElement("div");
      div.className = "col-md-3 col-6 pb-2";
      div.setAttribute("data-key", cardDetails.id);
      div.innerHTML = `
        <div class="card topCard text-center w-100 py-3">
            <div class="card-body">
                <h5 class="card-title fs-5 fw-medium">${cardDetails.title}</h5>
                <p class="card-text fs-4 fw-bold">${cardDetails.value}</p>
            </div>
        </div>
    `;
      topCards.appendChild(div);
    });

    data.tableViewInfo.forEach((tableInfo) => {
      const li = document.createElement("li");

      if (tableInfo.id === 1) {
        li.className =
          "chartcard list-group-item border-top-0 border-start-1 border-end-0 p-3 px-4 flex flex-col align-items-center rounded-0";
      } else if (tableInfo.id === 5) {
        li.className =
          "chartcard list-group-item border-top-0 border-start-1 border-end-0 border-bottom-0 p-3 px-4 flex flex-col align-items-center rounded-0";
      } else {
        li.className =
          "chartcard list-group-item border-top-0 border-start-1 border-end-0 p-3 px-4 flex flex-col align-items-center";
      }

      li.setAttribute("data-key", tableInfo.id);

      li.innerHTML = `
        <h5 class="cardbox-title">${tableInfo.title}</h5>
        <p class="card-text fs-4 fw-bold">${tableInfo.value}</p>
    `;

      tableInfoCards.append(li);
    });

    data.unresolvedTickets.forEach((tableInfo) => {
      const li = document.createElement("li");

      if (tableInfo.id === 4) {
        li.className =
          "list-group-item fw-medium border-0 p-4 d-flex justify-content-between align-items-center";
      } else {
        li.className =
          "list-group-item fw-medium border-top-0 border-start-0 border-end-0 p-3 px-4 d-flex justify-content-between align-items-center";
      }

      li.setAttribute("data-key", tableInfo.id);

      li.innerHTML = `
        <div class="infoText">${tableInfo.title}</div>
        <div class="infoNumber">${tableInfo.value}</div>
      `;

      ticketDetails.append(li);
    });

    data.tasks.forEach((task) => {
      const li = document.createElement("li");

      if (task.id === 4) {
        li.className =
          "list-group-item fw-medium border-0 p-4 d-flex justify-content-between align-items-center";
      } else {
        li.className =
          "list-group-item fw-medium border-top-0 border-start-0 border-end-0 p-3 px-4 d-flex justify-content-between align-items-center";
      }

      li.setAttribute("data-key", task.id);

      if (task.id === 1) {
        li.innerHTML = `  <div class="newTaskTitle">${task.title}</div>
        <div class="cross rounded-4 p-1 px-2 fw-bold">${task.subText}</div>`;
      } else {
        li.innerHTML = `
        <div class="infoText">
          <div
            class="form-check d-flex justify-content-between align-items-center gap-2"
          >
            <input
              class="form-check-input rounded-circle p-2"
              type="checkbox"
              value=""
              id="flexCheckDefault${task.id}"
            />
            <label
              class="form-check-label pt-1.5"
              for="flexCheckDefault${task.id}"
            >
            ${task.title}
            </label>
          </div>
        </div>
        <div
          class="${task.btnTag} text-uppercase tagText px-3 rounded-4 py-1 fw-medium"
        >
        ${task.subText}
        </div>
        `;
      }

      taskDetails.append(li);
    });
  } catch (error) {
    console.log("Error", error);
  }
}

getSiteData();
