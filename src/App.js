import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { Box, Button, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const navigate = useNavigate();

  return (
    <Box>
      <Box>
        <Button onClick={() => navigate("/path1?id=1")}>1번 고객보기</Button>
        <Button onClick={() => navigate("/path1?id=2")}>2번 고객보기</Button>
        <Button onClick={() => navigate("/path1?id=3")}>3번 고객보기</Button>

        <Button onClick={() => navigate("/path2/seoul")}>seoul 보기</Button>
        <Button onClick={() => navigate("/path2/busan")}>busan 보기</Button>
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
}

function Acomp() {
  const [customerName, setCustomerName] = useState("");
  // query string 을 얻기
  const [p] = useSearchParams();

  useEffect(() => {
    axios
      .get("/api/main1/sub4?" + p.toString())
      .then(({ data }) => setCustomerName(data))
      .catch(() => setCustomerName("고객 없음"));
  }, [p]);

  return (
    <Box>
      {customerName && (
        <Text>
          {p.get("id")} 번 고객명 : {customerName}
        </Text>
      )}
    </Box>
  );
}

function Bcomp() {
  // dynamic param을 얻는 hook
  const { address } = useParams();

  return <Box>{address}</Box>;
}

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="path1" element={<Acomp />} />
      {/* dynamic param : spring web mvc 의 path variable 과 유사 */}
      <Route path="path2/:address" element={<Bcomp />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
