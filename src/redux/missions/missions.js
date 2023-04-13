// Action type
const FETCH_MISSIONS = 'space-travelers-hub/missions/FETCH_MISSIONS';
const JOIN_MISSION = 'space-travelers-hub/missions/JOIN_MISSION';
const LEAVE_MISSION = 'space-travelers-hub/missions/LEAVE_MISSION';

// Action creator
const fetchMissions = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const missions = await response.json();
  const missionsData = [];
  missions.forEach((mission) => {
    missionsData.push({
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
    });
  });
  dispatch({
    type: FETCH_MISSIONS,
    payload: missions,
  });
};

const joinMission = (mission) => ({
  type: JOIN_MISSION,
  payload: mission,
});

const leaveMission = (mission) => ({
  type: LEAVE_MISSION,
  payload: mission,
});

// Reducer
const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.payload;
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.mission_id === action.payload.mission_id) {
          return {
            ...mission,
            reserved: true,
          };
        }
        return mission;
      });
    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.mission_id === action.payload.mission_id) {
          return {
            ...mission,
            reserved: false,
          };
        }
        return mission;
      });
    default:
      return state;
  }
};
export { fetchMissions, joinMission, leaveMission };
export default missionsReducer;
