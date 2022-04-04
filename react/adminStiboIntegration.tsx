import React, { FC } from 'react';
import { Layout, PageBlock, PageHeader } from "vtex.styleguide";
import { FormattedMessage } from 'react-intl'

const adminStiboIntegration: FC = () => {
  return (
    <Layout>
      <PageHeader title="STIBO SYSTEMS (STEP)  INTEGRATION" />
      <PageBlock>
        <p><FormattedMessage id="admin/stibo-integration.text-1"/></p>
        <strong><FormattedMessage id="admin/stibo-integration.text-2"/></strong>
        <p><FormattedMessage id="admin/stibo-integration.text-3"/></p>
        <img src="https://user-images.githubusercontent.com/75738359/155565452-8ba33724-ca85-4540-af32-1777bcdec2b3.jpg"></img>
        <p><strong>STIBO SYSTEMS (STEP):</strong> <FormattedMessage id="admin/stibo-integration.text-4"/></p>
        <p><strong>VTEX:</strong> <FormattedMessage id="admin/stibo-integration.text-5"/></p>
        <p><strong>Blob Storage:</strong> <FormattedMessage id="admin/stibo-integration.text-6"/></p>
        <br>
        </br>
        <strong><FormattedMessage id="admin/stibo-integration.text-7"/></strong>
        <br>
        </br>
        <p><FormattedMessage id="admin/stibo-integration.text-8"/></p>
        <dl>
          <dd>• <FormattedMessage id="admin/stibo-integration.text-9"/></dd>
          <p><dd><FormattedMessage id="admin/stibo-integration.text-10"/></dd></p>
          <dd><img src="https://user-images.githubusercontent.com/75738359/155565456-1a6e6066-4a06-4f80-bc86-baab84030e7b.png"></img></dd>
          <p><dd><FormattedMessage id="admin/stibo-integration.text-11"/></dd></p>
          <dd><img src="https://user-images.githubusercontent.com/75738359/159550653-62db2604-dd6d-4bc7-ab70-f362334d583c.png"></img></dd>
          <p><dd><FormattedMessage id="admin/stibo-integration.text-12"/></dd></p>
          <dd><img src="https://user-images.githubusercontent.com/75738359/159551541-d417caf9-21b3-4e29-902b-1b059b30f260.png"></img></dd>
          <br>
          </br>
          <p><dd>• <FormattedMessage id="admin/stibo-integration.text-13"/> </dd></p>
          <dd><FormattedMessage id="admin/stibo-integration.text-14"/>
            <dl>
              <dd>a. <FormattedMessage id="admin/stibo-integration.text-15"/></dd>
            </dl>
          </dd>
          <dd><FormattedMessage id="admin/stibo-integration.text-16"/></dd>
          <dd><img src="https://user-images.githubusercontent.com/75738359/155565455-09e578d0-b454-4e5f-869f-87db619f8355.png"></img>
            <dl>
              <dd>b. <FormattedMessage id="admin/stibo-integration.text-17"/></dd>
            </dl>
          </dd>
          <dd><FormattedMessage id="admin/stibo-integration.text-18"/></dd>
          <p><dd><img src="https://user-images.githubusercontent.com/75738359/155565462-0a6e8dc4-053d-4ebb-8a46-da509a6b0b0e.png"></img></dd></p>
          <dd><FormattedMessage id="admin/stibo-integration.text-19"/></dd>
          <p><dd><img src="https://user-images.githubusercontent.com/75738359/159551969-36027b1b-a42e-46dd-ac04-4eed1a100fb9.jpg"></img></dd></p>
          <dd><FormattedMessage id="admin/stibo-integration.text-20"/></dd>
          <p><dd><img src="https://user-images.githubusercontent.com/75738359/159552067-7b2791c8-84c7-420d-866a-feaef141be55.jpg"></img></dd></p>
          <br>
          </br>
          <p><dd>• <FormattedMessage id="admin/stibo-integration.text-21"/></dd></p>
          <dd><FormattedMessage id="admin/stibo-integration.text-22"/></dd>
          <dd>a. <FormattedMessage id="admin/stibo-integration.text-23"/></dd>
          <dd>b. <FormattedMessage id="admin/stibo-integration.text-24"/></dd>
          <br>
          </br>
          <dd><FormattedMessage id="admin/stibo-integration.text-25"/></dd>
          <dd>a. <FormattedMessage id="admin/stibo-integration.text-26"/></dd>
          <dd>b. <FormattedMessage id="admin/stibo-integration.text-27"/></dd>
          <p><dd><FormattedMessage id="admin/stibo-integration.text-28"/></dd></p>
          <dd><img src="https://user-images.githubusercontent.com/75738359/155565459-ac28441e-8e47-446c-bebc-e2b38722ff61.png"></img></dd>
          <p><dd><FormattedMessage id="admin/stibo-integration.text-29"/></dd></p>
          <dd><img src="https://user-images.githubusercontent.com/75738359/159552257-18ada07e-3bf4-4218-a23b-649ff5a1f559.jpg"></img></dd>
          <dd><img src="https://user-images.githubusercontent.com/75738359/159552332-56be7db6-8533-487d-a5d3-3b40f31fb239.jpg"></img></dd>
          <p><dd><FormattedMessage id="admin/stibo-integration.text-30"/></dd></p>
          <dd><img src="https://user-images.githubusercontent.com/75738359/159552425-7fd90ee4-e1fe-462c-93c2-e416bda8f45d.jpg"></img></dd>
          <br>
          </br>
          <p><dd>• <FormattedMessage id="admin/stibo-integration.text-31"/></dd></p>
          <dd><FormattedMessage id="admin/stibo-integration.text-32"/></dd>
          <dd><img src="https://user-images.githubusercontent.com/75738359/155565469-9593c03b-d5ea-4e3f-ada1-ca0384f426de.png"></img></dd>
        </dl>
        <br>
        </br>
        <strong><FormattedMessage id="admin/stibo-integration.text-33"/></strong>
        <dl>
          <dt>1. <FormattedMessage id="admin/stibo-integration.text-34"/></dt>
          <p><dd><FormattedMessage id="admin/stibo-integration.text-35"/> </dd></p>
          <dt>2. <FormattedMessage id="admin/stibo-integration.text-36"/></dt>
          <dd style={{ overflowWrap: "break-word" }}>a. RESTGateway.ServerURL=VTEX_REST=https://&lt;vtex_account&gt;/api,OBJECT_STORAGE=&lt;blob_storage_hostname&gt;</dd>
          <p><dd>VTEX_REST: <FormattedMessage id="admin/stibo-integration.text-37"/></dd></p>
          <dd>BLOB_STORAGE: <FormattedMessage id="admin/stibo-integration.text-38"/></dd>
          <p><dt><FormattedMessage id="admin/stibo-integration.text-54"/></dt></p>
          <dt style={{ fontSize: ".75rem", overflowWrap: "break-word" }}>#==============================================================================#</dt>
          <dt style={{ fontSize: ".75rem", overflowWrap: "break-word" }}># RESTGateway.ServerURL</dt>
          <dt style={{ fontSize: ".75rem", overflowWrap: "break-word" }}>#==============================================================================#</dt>
          <p><dt style={{ fontSize: ".75rem", overflowWrap: "break-word" }}>RESTGateway.ServerURL=VTEX_REST=https://{'{vtexhost}'}.vtexcommercestable.com.br/api,OBJECT_STORAGE=https://{'{hostname}'}</dt></p>
          <dt>3. <FormattedMessage id="admin/stibo-integration.text-39"/></dt>
          <dd>a. <FormattedMessage id="admin/stibo-integration.text-40"/></dd>
          <dd><img src="https://user-images.githubusercontent.com/75738359/155565464-19a1e082-d7e7-4fe9-a780-d9f593562f22.png"></img></dd>
          <p><dd><FormattedMessage id="admin/stibo-integration.text-41"/></dd></p>
          <br>
          </br>
          <dd><FormattedMessage id="admin/stibo-integration.text-42"/></dd>
          <dd><img src="https://user-images.githubusercontent.com/75738359/159552624-731f105c-e3c7-49b4-b762-7dfb8bbaf93a.png"></img></dd>
          <br>
          </br>
          <dd><FormattedMessage id="admin/stibo-integration.text-43"/></dd>
          <dd><img src="https://user-images.githubusercontent.com/75738359/159552719-b99a3c00-17bd-48b0-823f-346cde1432b5.png"></img></dd>
          <br>
          </br>
          <dd>b. <FormattedMessage id="admin/stibo-integration.text-44"/></dd>
          <dd><img src="https://user-images.githubusercontent.com/75738359/155565473-f50d92ea-91e2-43b7-86f1-3d05e0d73c6a.png"></img></dd>
          <br>
          </br>
          <p><dd><FormattedMessage id="admin/stibo-integration.text-45"/></dd></p>
          <dd><img src="https://user-images.githubusercontent.com/75738359/159552886-0ba57219-e9ba-4b3d-8289-30177b2370da.png"></img></dd>
          <br>
          </br>
          <dd>c. <FormattedMessage id="admin/stibo-integration.text-46"/></dd>
          <dd><img src="https://user-images.githubusercontent.com/75738359/155565470-b8920c00-4b6f-47f7-ab18-8fa0a98b4c92.png"></img></dd>
          <p><dd><FormattedMessage id="admin/stibo-integration.text-47"/></dd></p>
          <dd>d. <FormattedMessage id="admin/stibo-integration.text-48"/></dd>
          <dd><img src="https://user-images.githubusercontent.com/75738359/155565474-5cc92fa2-ac9f-4e3f-be1b-36211181978a.png"></img></dd>
        </dl>
        <br>
        </br>
        <strong><FormattedMessage id="admin/stibo-integration.text-49"/></strong>
        <dl>
          <dt><strong>1. <FormattedMessage id="admin/stibo-integration.text-50"/></strong></dt>
          <p><dd><FormattedMessage id="admin/stibo-integration.text-51"/></dd></p>
          <dd><img src="https://user-images.githubusercontent.com/75738359/159553065-3a1a185d-485b-446c-b0e4-38c103a1e6fa.png"></img></dd>
          <p><dd><FormattedMessage id="admin/stibo-integration.text-52"/></dd></p>
          <dd><img src="https://user-images.githubusercontent.com/75738359/159553035-b4d3218a-b4f6-4c63-83bd-c918f46cbe41.png"></img></dd>
          <dt><strong>2. <FormattedMessage id="admin/stibo-integration.text-53"/></strong></dt>
        </dl>
      </PageBlock>
    </Layout>
  )
}

export default adminStiboIntegration
