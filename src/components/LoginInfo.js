import { Stack } from "@mui/system";
import { Button } from "@mui/material";

export default function LoginInfo({
  currentUser,
  groupCode,
  handleShowNewChoreModal,
  handleShowNewAccountModal,
  onLogout
}) {
  return (
    <>
      <Stack>
        <Stack spacing={0}>
          {" "}
          {/* welcome + group code text */}
          <h1>Welcome, {currentUser}</h1>
          <h3>Group Code: {groupCode}</h3>
        </Stack>

        <Stack direction="row" spacing={2}>
          {" "}
          {/* buttons stack */}
          <Button
            variant="contained"
            onClick={handleShowNewChoreModal}
            style={{ maxWidth: "200px" }}
          >
            New Chore
          </Button>
          <Button
            variant="contained"
            onClick={handleShowNewAccountModal}
            style={{ maxWidth: "300px" }}
          >
            Add Roommate
          </Button>
          <Button
            variant="contained"
            onClick={onLogout}
            style={{ maxWidth: "200px" }}
          >
            Log Out
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
