import api from "@/plugins/axiosinterceptor";

const projectSearch = async ({ name, email, language, page = 0, size = 10 }) => {
  try {
    const url = '/project/search';

    const res = await api.get(url, {
      params: {
        name,
        email,
        language,
        page,
        size
      }
    });

    return res.data;
  } catch (error) {
    return error.response?.data ?? { success: false, message: "API 요청 실패" };
  }
};


const projectList = async () => {
    let data = {};
    let url = '/project/list';

    await api.get(url)
        .then((res) => {
            data = res.data;
        })
        .catch((error) => {
            data = error.data;
        });

    return data;
}

const projectCreate = async (req) => {
    let data = {};
    let url = '/project/create';

    await api.post(url, req, {headers: {'Content-Type': 'application/json'}})
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

    let url = '/project/list'; // 데이터를 "가져올" 주소

    // if (userId) {
    //     url += `?userId=${encodeURIComponent(userId)}`;
    // } 뭐 이런식으로 url을 변경해서 get방식으로 사용할 수도 있다고 합니다. ...

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
    let url = `/project/read?idx=${projectId}`;

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
    let url = `/projects/${projectId}`;

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


export default {projectSearch, projectCreate, fetchProjectById, fetchAllProjects, updateProject, projectList }