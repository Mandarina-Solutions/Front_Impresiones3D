
export const PathTestId = {
    login: 'login',
    main: 'main'
}

export const mainPaths = {
    login: `/${PathTestId.login}`,
    main: `/${PathTestId.main}`
}

export const paths = {
    login: {
        path: `${mainPaths.login}`,
        label: 'Login'
    },
    main: {
        path: `${mainPaths.main}`,
        label: 'Main'
    },
    mock:{
        uno: '/uno',
        dos: '/dos',
        tres: '/tres'
    }
}

