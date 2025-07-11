import api from "@/plugins/axiosinterceptor";

const projectCreate = async (req) => {
    let data = {};
    let url = '/api/v1/project/project.json';

    await api.get(url, req)
        .then((res) => {
            data = res.data;
        })
        .catch((error) => {
            data = error.data;
        });

    return data;
}

const fetchAllProjects = async () => {
    let data = {};
    let url = '/api/v1/projects'; // 데이터를 "가져올" 주소

    
    await api.get(url)
        .then((res) => {
            // 성공하면, res.data에 프로젝트 목록 배열이 담겨옴.
            data = res.data;
        })
        .catch((error) => {
            data = error.data;
        });

    return data;
}

/**
 * 특정 ID를 가진 프로젝트 하나의 정보를 불러오는 함수
 * @param {number | string} projectId - 조회하고 싶은 프로젝트의 ID
 */
const fetchProjectById = async (projectId) => {
    let data = {};
    
    // 백틱(`)을 사용하여 URL 문자열 안에 ${projectId} 변수를 삽입합니다.
    let url = `/api/v1/projects/${projectId}`; 

    console.log("요청할 URL:", url);

    await api.get(url) // 동적으로 만들어진 URL로 요청을 보냅니다.
        .then((res) => {
            data = res.data;
        })
        .catch((error) => {
            data = error.data;
        });

    return data;
}

/**
 * 특정 프로젝트의 정보를 부분적으로 수정하는 함수
 * @param {number | string} projectId - 수정할 프로젝트의 ID
 * @param {object} updateData - 수정할 내용이 담긴 객체
 */
const updateProject = async (projectId, updateData) => {
    let data = {};
    
    // 1. 수정할 대상의 주소를 동적으로 만듭니다.
    let url = `/api/v1/projects/${projectId}`; 

    // 2. api.patch를 사용하여, 수정할 내용(updateData)만 서버로 보냅니다.
    await api.patch(url, updateData)
        .then((res) => {
            data = res.data;
        })
        .catch((error) => {
            data = error.data;
        });

    return data;
}



// const projectImageUpload = async (req) => {
//     let data = {};
//     let url = '/api/v1/files/upload';

//     await api.post(url, req, {
//         headers: {
//             "Content-Type": "multipart/form-data"
//         }
//     })
//         .then((res) => {
//             data = res.data;
//         })
//         .catch((error) => {
//             data = error.data;
//         });

//     return data;
// }


export default { projectCreate, fetchProjectById, fetchAllProjects, updateProject }