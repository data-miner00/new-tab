export const state = () => ({
  username: 'Sebastian',
})

export const mutations = {
  setUsername(state: any, username: string) {
    state.username = username
  },
}
