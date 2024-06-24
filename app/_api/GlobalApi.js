
import { request, gql } from "graphql-request";

const SendDataToDatabase = async (data) => {
  const query = gql`
    mutation MyMutation {
  createCustomer(
         data: {
        name: "` +
    data.name +
    `"
        email: "` +
    data.email +
    `"
        phoneNumber: `
      `
        address: "` +
    data.address +
    `"
     date: "` +
    data.date +
    `"
      }
    ) {
      id
    }
  publishManyCustomers(to: PUBLISHED) {
    count
  }
}
  `;

  // const variables = {
  //   data: {
  //     name: data.name,
  //     email: data.email,
  //     phoneNumber: data.phoneNumber,
  //     address: data.address,
  //     date: data.dateTime, // Make sure data.dateTime is correctly formatted
  //   },
  // };
  const endpoint =
    "https://api-ap-south-1.hygraph.com/v2/clxoyzx5v018806uxpcgqljnw/master";
  const result = await request(endpoint, query);
  return result;
};

export default SendDataToDatabase;
