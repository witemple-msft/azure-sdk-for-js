/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

export {
  AdditionalCapabilities,
  AdditionalUnattendContent,
  ApiEntityReference,
  ApiError,
  ApiErrorBase,
  AutomaticOSUpgradePolicy,
  AutomaticOSUpgradeProperties,
  AutomaticRepairsPolicy,
  AvailabilitySet,
  AvailabilitySetUpdate,
  AvailablePatchSummary,
  BaseResource,
  BillingProfile,
  BootDiagnostics,
  BootDiagnosticsInstanceView,
  CloudError,
  CreationData,
  DataDisk,
  DataDiskImage,
  DataDiskImageEncryption,
  DedicatedHost,
  DedicatedHostAllocatableVM,
  DedicatedHostAvailableCapacity,
  DedicatedHostGroup,
  DedicatedHostGroupInstanceView,
  DedicatedHostGroupUpdate,
  DedicatedHostInstanceView,
  DedicatedHostInstanceViewWithName,
  DedicatedHostUpdate,
  DiagnosticsProfile,
  DiffDiskSettings,
  Disallowed,
  DisallowedConfiguration,
  Disk,
  DiskAccess,
  DiskEncryptionSet,
  DiskEncryptionSetParameters,
  DiskEncryptionSettings,
  DiskImageEncryption,
  DiskInstanceView,
  DiskSku,
  Encryption,
  EncryptionImages,
  EncryptionSetIdentity,
  EncryptionSettingsCollection,
  EncryptionSettingsElement,
  ExtendedLocation,
  Gallery,
  GalleryApplication,
  GalleryApplicationUpdate,
  GalleryApplicationVersion,
  GalleryApplicationVersionPublishingProfile,
  GalleryApplicationVersionUpdate,
  GalleryArtifactPublishingProfileBase,
  GalleryArtifactVersionSource,
  GalleryDataDiskImage,
  GalleryDiskImage,
  GalleryIdentifier,
  GalleryImage,
  GalleryImageIdentifier,
  GalleryImageUpdate,
  GalleryImageVersion,
  GalleryImageVersionPublishingProfile,
  GalleryImageVersionStorageProfile,
  GalleryImageVersionUpdate,
  GalleryOSDiskImage,
  GalleryUpdate,
  HardwareProfile,
  Image,
  ImageDataDisk,
  ImageDisk,
  ImageDiskReference,
  ImageOSDisk,
  ImagePurchasePlan,
  ImageReference,
  ImageStorageProfile,
  ImageUpdate,
  InnerError,
  InstanceViewStatus,
  KeyForDiskEncryptionSet,
  KeyVaultAndKeyReference,
  KeyVaultAndSecretReference,
  KeyVaultKeyReference,
  KeyVaultSecretReference,
  LastPatchInstallationSummary,
  LinuxConfiguration,
  LinuxPatchSettings,
  MaintenanceRedeployStatus,
  ManagedDiskParameters,
  NetworkInterfaceReference,
  NetworkProfile,
  OrchestrationServiceStateInput,
  OrchestrationServiceSummary,
  OSDisk,
  OSDiskImage,
  OSDiskImageEncryption,
  OSProfile,
  PatchSettings,
  Plan,
  PrivateEndpoint,
  PrivateEndpointConnection,
  PrivateLinkServiceConnectionState,
  ProximityPlacementGroup,
  ProximityPlacementGroupUpdate,
  PurchasePlan,
  RecommendedMachineConfiguration,
  RecoveryWalkResponse,
  RegionalReplicationStatus,
  ReplicationStatus,
  Resource,
  ResourceRange,
  RollbackStatusInfo,
  RollingUpgradePolicy,
  RollingUpgradeProgressInfo,
  RollingUpgradeRunningStatus,
  RollingUpgradeStatusInfo,
  RunCommandInputParameter,
  ScaleInPolicy,
  ScheduledEventsProfile,
  SecurityProfile,
  ShareInfoElement,
  Sku,
  Snapshot,
  SnapshotSku,
  SourceVault,
  SshConfiguration,
  SshPublicKey,
  SshPublicKeyResource,
  SshPublicKeyUpdateResource,
  StorageProfile,
  SubResource,
  SubResourceReadOnly,
  SubResourceWithColocationStatus,
  TargetRegion,
  TerminateNotificationProfile,
  UefiSettings,
  UpdateResource,
  UpdateResourceDefinition,
  UpgradeOperationHistoricalStatusInfo,
  UpgradeOperationHistoricalStatusInfoProperties,
  UpgradeOperationHistoryStatus,
  UpgradePolicy,
  UserArtifactManage,
  UserArtifactSource,
  VaultCertificate,
  VaultSecretGroup,
  VirtualHardDisk,
  VirtualMachine,
  VirtualMachineAgentInstanceView,
  VirtualMachineCaptureResult,
  VirtualMachineExtension,
  VirtualMachineExtensionHandlerInstanceView,
  VirtualMachineExtensionImage,
  VirtualMachineExtensionInstanceView,
  VirtualMachineExtensionUpdate,
  VirtualMachineHealthStatus,
  VirtualMachineIdentity,
  VirtualMachineIdentityUserAssignedIdentitiesValue,
  VirtualMachineImage,
  VirtualMachineImageFeature,
  VirtualMachineImageResource,
  VirtualMachineInstanceView,
  VirtualMachinePatchStatus,
  VirtualMachineReimageParameters,
  VirtualMachineRunCommand,
  VirtualMachineRunCommandInstanceView,
  VirtualMachineRunCommandScriptSource,
  VirtualMachineRunCommandUpdate,
  VirtualMachineScaleSet,
  VirtualMachineScaleSetDataDisk,
  VirtualMachineScaleSetExtension,
  VirtualMachineScaleSetExtensionProfile,
  VirtualMachineScaleSetExtensionUpdate,
  VirtualMachineScaleSetIdentity,
  VirtualMachineScaleSetIdentityUserAssignedIdentitiesValue,
  VirtualMachineScaleSetInstanceView,
  VirtualMachineScaleSetInstanceViewStatusesSummary,
  VirtualMachineScaleSetIPConfiguration,
  VirtualMachineScaleSetIpTag,
  VirtualMachineScaleSetListOSUpgradeHistory,
  VirtualMachineScaleSetListResult,
  VirtualMachineScaleSetListSkusResult,
  VirtualMachineScaleSetListWithLinkResult,
  VirtualMachineScaleSetManagedDiskParameters,
  VirtualMachineScaleSetNetworkConfiguration,
  VirtualMachineScaleSetNetworkConfigurationDnsSettings,
  VirtualMachineScaleSetNetworkProfile,
  VirtualMachineScaleSetOSDisk,
  VirtualMachineScaleSetOSProfile,
  VirtualMachineScaleSetPublicIPAddressConfiguration,
  VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings,
  VirtualMachineScaleSetReimageParameters,
  VirtualMachineScaleSetSku,
  VirtualMachineScaleSetSkuCapacity,
  VirtualMachineScaleSetStorageProfile,
  VirtualMachineScaleSetUpdate,
  VirtualMachineScaleSetUpdateIPConfiguration,
  VirtualMachineScaleSetUpdateNetworkConfiguration,
  VirtualMachineScaleSetUpdateNetworkProfile,
  VirtualMachineScaleSetUpdateOSDisk,
  VirtualMachineScaleSetUpdateOSProfile,
  VirtualMachineScaleSetUpdatePublicIPAddressConfiguration,
  VirtualMachineScaleSetUpdateStorageProfile,
  VirtualMachineScaleSetUpdateVMProfile,
  VirtualMachineScaleSetVM,
  VirtualMachineScaleSetVMExtension,
  VirtualMachineScaleSetVMExtensionsSummary,
  VirtualMachineScaleSetVMExtensionUpdate,
  VirtualMachineScaleSetVMInstanceIDs,
  VirtualMachineScaleSetVMInstanceRequiredIDs,
  VirtualMachineScaleSetVMInstanceView,
  VirtualMachineScaleSetVMNetworkProfileConfiguration,
  VirtualMachineScaleSetVMProfile,
  VirtualMachineScaleSetVMProtectionPolicy,
  VirtualMachineScaleSetVMReimageParameters,
  VirtualMachineStatusCodeCount,
  VirtualMachineUpdate,
  VMScaleSetConvertToSinglePlacementGroupInput,
  WindowsConfiguration,
  WinRMConfiguration,
  WinRMListener
} from "../models/mappers";
