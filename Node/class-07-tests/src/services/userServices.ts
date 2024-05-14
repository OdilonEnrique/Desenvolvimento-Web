export type DataUser = {
  id: string;
  name: String;
  email: String;
};

export type userRepository = {
  create(data: DataUser) : Promise<DataUser | undefined>
}

export const userServices = {
  async create(data: DataUser, userRepository: userRepository) {
    try {
      const { id, name, email } = data;

      const user = {
        id,
        name,
        email,
      };

      const userCreated = await userRepository.create(user);

      return userCreated;
    } catch (error) {
      console.error(error);
    }
  },
};
