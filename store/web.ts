export const state = () => ({
  page: 'Main',
})

export const mutations = {
  setPage(state: any, page: string) {
    state.page = page
  },
}
