import api from "@/plugins/axiosinterceptor";

const codeRun = async () => {
    let data = {};
    let url = '/code/run';

    await api.get(url)
        .then((res) => {
            data = res.data;
        })
        .catch((error) => {
            data = error.data;
        });

    return data;
}

export default { codeRun }