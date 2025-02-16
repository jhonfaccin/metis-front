import api from "./api";

const createDiary = (diary) => {
    return api.post("/cadastrarDiario", diary)
}

const getDiaries = (diary) => {
    return api.get("/diarios")
}

const getDiary = (id) => {
    return api.get("/diario/" + id)
}

const deleteDiary = (id) => {
    return api.delete("/excluirDiario/" + id)
}

const updateDiary = (diary) => {
    return api.put("/atualizarDiario/" + diary.id, diary)
}

const diaryService = {
    createDiary,
    getDiaries,
    deleteDiary,
    getDiary,
    updateDiary,
};

export default diaryService;
