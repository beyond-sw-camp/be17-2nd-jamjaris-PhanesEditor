import api from "@/plugins/axiosinterceptor";

const projectFile = async (req) => {
    let data = {};
    let url = '/file/register'; // 임시로 레지스터로 받게 하기 실험

    await api.post(url, req)
        .then((res) => {
            data = res.data;
        })
        .catch((error) => {
            data = error.data;
        });

    return data;
}


async function fetchProjectTree(projectId) {
    // [백엔드 연동] API가 있으면 여기에 연결하세요.
    // 예: return await api.getProjectTree({ projectId });
    // 여기서는 스크린샷과 유사한 더미 데이터로 보여줄게요.
    return [
        { type: 'folder', name: '.gradle', children: [] },
        { type: 'folder', name: '.idea', children: [] },
        { type: 'folder', name: 'build', children: [] },
        { type: 'folder', name: 'gradle', children: [] },
        {
            type: 'folder', name: 'src', children: [
                {
                    type: 'folder', name: 'main', children: [
                        {
                            type: 'folder', name: 'java', children: [
                                {
                                    type: 'folder', name: 'org.example.coding_convention', children: [
                                        { type: 'folder', name: 'chat', children: [] },
                                        { type: 'folder', name: 'common', children: [] },
                                        {
                                            type: 'folder', name: 'config', children: [
                                                {
                                                    type: 'folder', name: 'filter', children: [
                                                        { type: 'file', name: 'JwtAuthFilter.java', path: '/src/main/java/.../config/filter/JwtAuthFilter.java' },
                                                        { type: 'file', name: 'LoginFilter.java', path: '/src/main/java/.../config/filter/LoginFilter.java' },
                                                    ]
                                                },
                                                { type: 'file', name: 'SecurityConfig.java', path: '/src/main/java/.../config/SecurityConfig.java' },
                                            ]
                                        },
                                        {
                                            type: 'folder', name: 'project', children: [
                                                {
                                                    type: 'folder', name: 'controller', children: [
                                                        { type: 'file', name: 'ProjectController.java', path: '/src/main/java/.../project/controller/ProjectController.java' },
                                                    ]
                                                },
                                                {
                                                    type: 'folder', name: 'model', children: [
                                                        { type: 'file', name: 'Project.java', path: '/src/main/java/.../project/model/Project.java' },
                                                        { type: 'file', name: 'ProjectDto.java', path: '/src/main/java/.../project/model/ProjectDto.java' },
                                                    ]
                                                },
                                                {
                                                    type: 'folder', name: 'repository', children: [
                                                        { type: 'file', name: 'ProjectRepository.java', path: '/src/main/java/.../project/repository/ProjectRepository.java' },
                                                    ]
                                                },
                                                {
                                                    type: 'folder', name: 'service', children: [
                                                        { type: 'file', name: 'ProjectService.java', path: '/src/main/java/.../project/service/ProjectService.java' },
                                                    ]
                                                },
                                            ]
                                        },
                                        { type: 'folder', name: 'project_member', children: [] },
                                        { type: 'folder', name: 'user', children: [] },
                                        { type: 'folder', name: 'utils', children: [] },
                                        { type: 'file', name: 'CodingConventionApplication.java', path: '/src/main/java/.../CodingConventionApplication.java' },
                                    ]
                                }
                            ]
                        }
                    ]
                },
                { type: 'folder', name: 'resources', children: [] },
            ]
        },
        { type: 'file', name: 'build.gradle', path: '/build.gradle' },
        { type: 'file', name: 'settings.gradle', path: '/settings.gradle' },
    ];
}


async function openFile(fileIdx) {
    let data = {};
    let url = `/file/read/${fileIdx}`;

    await api.get(url)
        .then((res) => {
            data = res.data;
        })
        .catch((error) => {
            data = error.data;
        });

    return data;
}

export default { projectFile, fetchProjectTree, openFile }