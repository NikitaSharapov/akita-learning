export interface DeviceWithName {
  id: string;
  mac: string;
  ipv6: string;
  ipv4: string;
  name: string;
}

export interface GroupWithDevices {
  id: number;
  name: string;
  devices: DeviceWithName[];
}

export interface GroupsListWithDevices {
  data: GroupWithDevices[];
}

export function createGroupsListWithDevices(_params: Partial<GroupsListWithDevices>) {
  return {
    data:[]
  } as GroupsListWithDevices;
}

export function createGroupWithDevices(_params: Partial<GroupWithDevices>) {
  return {
    id: 0,
    name: '',
    devices:[],
  } as GroupWithDevices;
}