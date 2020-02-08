import { GetterTree, ActionTree, MutationTree, ActionContext } from 'vuex'
import { Context } from '@nuxt/types'

export const state = () => ({
  things: [] as string[],
  name: 'Me'
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  name: state => state.name
}

export const mutations: MutationTree<RootState> = {
  CHANGE_NAME(state, newName: string) {
    state.name = newName
  }
}

interface Actions<S, R> extends ActionTree<S, R> {
  nuxtServerInit(actionContext: ActionContext<S, R>, appContext: Context): void
}

export const actions: Actions<RootState, RootState> = {
  nuxtServerInit({ commit }, { req }) {},
  fetchThings({ commit }) {
    commit('CHANGE_NAME', 'New name')
  }
}
