import defaultUser from '../utils/default-user';

export async function signIn(email, password) {
  try {
    // Send request
    const response = await fetch('http://172.22.5.80:8000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    const token = data.token;
    localStorage.setItem('token', token);
    localStorage.setItem('id', data.data.id);
    const user = {
      email: data.data.email,
      avatarUrl: 'https://picsum.photos/200'
    };
    
    return {
      isOk: true,
      data: user
    };
  } catch {
    return {
      isOk: false,
      message: "Authentication failed"
    };
  }
}

export async function getUser() {
  try {
    // Send request
    if (localStorage.getItem('token') === null) {
      return {
        isOk: false
      };
    } else {
      const id = localStorage.getItem('id');
      const response = await fetch(`http://172.22.5.80:8000/api/users/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      const user = {
        email: data.data.email,
        avatarUrl: 'https://picsum.photos/200'
      };
      return {
        isOk: true,
        data: user
      };
    }
  } catch {
    return {
      isOk: false
    };
  }
}

export async function createAccount(email, password) {
  try {
    // Send request
    console.log(email, password);

    return {
      isOk: true
    };
  }
  catch {
    return {
      isOk: false,
      message: "Failed to create account"
    };
  }
}

export async function changePassword(email, recoveryCode) {
  try {
    // Send request
    console.log(email, recoveryCode);

    return {
      isOk: true
    };
  }
  catch {
    return {
      isOk: false,
      message: "Failed to change password"
    }
  }
}

export async function resetPassword(email) {
  try {
    // Send request
    console.log(email);

    return {
      isOk: true
    };
  }
  catch {
    return {
      isOk: false,
      message: "Failed to reset password"
    };
  }
}
