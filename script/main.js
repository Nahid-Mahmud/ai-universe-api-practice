"use strict";
/*
All data: https://openapi.programming-hero.com/api/ai/tools

Single data details: https://openapi.programming-hero.com/api/ai/tool/${id}

Single data Example: https://openapi.programming-hero.com/api/ai/tool/01

*/

const getRequestedDataFromApi = async () => {
  try {
    const request = await fetch(
      `https://openapi.programming-hero.com/api/ai/tools`
    );
    const data = await request.json();
    loadDataOnDisplay(data);
  } catch (error) {
    const errorContainer = document.getElementById("catching-error");
    errorContainer.innerText = error;
  } finally {
    const LoadngFinishContainer = document.getElementById("loading-finish");
    LoadngFinishContainer.innerText = "Loading Finish";
  }
};

// view data on display

const loadDataOnDisplay = (data) => {
  const getAiList = data?.data?.tools;
  const CardContainer = document.getElementById("card-container");
  console.log(getAiList[0]);

  getAiList.forEach((aiElement) => {
    console.log(aiElement);
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
      <img
        src="${aiElement.image}"
        alt="Image Not Found"
        class="rounded-xl"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">Features</h2>
      <ol class="list-decimal ml-5">
        ${aiElement?.features.map((item) => `<li>${item}</li>`).join("")}
      </ol>
      <hr />
      <div class="flex justify-between items-center">
        <div>
          <h2 class="text-xl font-semibold">${aiElement?.name}</h2>
          <div class="flex gap-2">
            <img src="./assets/images/date-icon.png" alt="" />
            <span>${aiElement?.published_in}</span>
          </div>
        </div>
        <img class="h-6 cursor-pointer" src="./assets/images/arrow.png" alt="" />
      </div>
    </div>
  </div>    
    
    
    `;
    CardContainer.appendChild(div);
  });
};

getRequestedDataFromApi();
