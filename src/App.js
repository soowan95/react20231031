import { Box, Select, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

function App(props) {
  const [customerId, setCustomerId] = useState(0);
  const [customerName, setCustomerName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [customerIdList, setCustomerIdList] = useState([]);
  useEffect(() => {
    axios.get("/api/main1/sub6").then(({ data }) => setCustomerIdList(data));
  }, []);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/api/main1/sub4?id=" + customerId)
      .then(({ data }) => setCustomerName(data))
      .catch((e) => setCustomerName(null))
      .finally(() => setIsLoading(false));
  }, [customerId]);
  return (
    <div>
      <Select
        placeholder="고객 번호를 선택하세요"
        onChange={(e) => setCustomerId(e.target.value)}
      >
        {customerIdList.map((id) => (
          <option value={id}>{id}</option>
        ))}
      </Select>
      <Box>
        {(isLoading && <Spinner />) ||
          (customerName && <Text>고객 이름 : {customerName}</Text>) || (
            <Text>조회한 고객이 없습니다. 다른 번호를 선택해주세요.</Text>
          )}
      </Box>
    </div>
  );
}

export default App;
