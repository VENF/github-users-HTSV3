export const getRepositorys = async (user) => {
  try {
    const response = await fetch(`https://api.github.com/users/${user}/repos`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (!response.ok) {
      const errorMessage = await response.json()
      return {
        status: response.status,
        ok: response.ok,
        errorMessage: errorMessage.message,
      }
    } else {
      return await response.json()
    }
  } catch (error) {
    return error
  }
}

export const getProfile = async (user) => {
  try {
    const response = await fetch(`https://api.github.com/users/${user}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (!response.ok) {
      const errorMessage = await response.json()
      return {
        status: response.status,
        ok: response.ok,
        errorMessage: errorMessage.message,
      }
    } else {
      return await response.json()
    }
  } catch (error) {
    return error
  }
}

