const state = () => ({
    position: {
        province: '浙江省',
        city: '宁波市'
    }
})

const mutations = {
    setPosition(state, val) {
        state.position = val;
    }
}

const actions = {
    setPosition: ({
        commit
    }, position) => {
        commit('setPosition', position)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}