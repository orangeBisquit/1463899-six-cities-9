export const getUserName = () => {
  const token = localStorage.getItem('USER_NAME');
  return token ?? '';
};

export const saveUserName = (userName: string): void => {
  localStorage.setItem('USER_NAME', userName);
};

export const dropUserName = (): void => {
  localStorage.removeItem('USER_NAME');
};
