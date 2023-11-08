import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Box, Button, Flex } from "@chakra-ui/react";

function HomeComponent() {
  return (
    <Box>
      <Flex gap={"10px"}>
        {/* react-router 사용시 a 태그를 사용하지 않을 것 */}
        <Box>
          <Button as={"a"} href="/apath">
            에이로 가기
          </Button>
        </Box>
        <Box>
          <Button as={"a"} href={"/bpath"}>
            비로 가기
          </Button>
        </Box>
        {/* 대신 Link Component 사용 */}
        <Box>
          <Link to={"/apath"}>go to a</Link>
        </Box>
        <Box>
          <Link to={"/bpath"}>go to b</Link>
        </Box>
      </Flex>
      <Outlet />
    </Box>
  );
}

function AComp() {
  return <Box>a component</Box>;
}

function BComp() {
  return <Box>b component</Box>;
}

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeComponent />}>
      <Route path="apath" element={<AComp />} />
      <Route path="bpath" element={<BComp />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
