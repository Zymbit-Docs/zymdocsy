---
title : "Getting Started with Zymkey4"
description: ""
date: ""
lastmod: ""
draft: false
images: []
type: "docs"
layout: "single"
weight: -690
toc: true
---

<p>ZYMKEY4i is the fourth generation of the Zymbit security module designed specifically to work with Raspberry Pi and NVIDIA Jetson. It connects to the GPIO header of the SBC and uses the I2C bus and GPIO-4 to communicate with the SBC CPU via an encrypted channel. </p>

<hr>
<h2 id="summary-of-setup-steps">Summary of Sstup Steps</h2>
<table>
<thead>
<tr>
<th></th>
<th><strong>Step Description</strong></th>
<th><strong>Notes and/ or Checkpoint</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td><strong>Hardware &amp; Connections</strong></td>
<td>What plugs into where.</td>
</tr>
<tr>
<td>1</td>
<td><strong>Battery Install</strong></td>
<td>The battery is required to maintain the Real Time Clock and the perimeter detect circuits when the host power is removed. See <a href="https://community.zymbit.com/t/zymkey-battery-do-i-need-it/779/2?u=michelle_of_zymbit">this chart</a> for more information.</td>
</tr>
<tr>
<td>2</td>
<td><strong>Hardware Install</strong></td>
<td>Blue LED will blink rapidly to indicate Zymkey is connected correctly but not yet configured.</td>
</tr>
<tr>
<td>3</td>
<td><strong>Configure I2C Bus</strong></td>
<td>The I2C Bus must be enabled. For Raspbian OS, the I2C Bus is disabled by default. For Ubuntu, the I2C Bus is enabled by default.</td>
</tr>
<tr>
<td>4</td>
<td><strong>Software Install &amp; API</strong></td>
<td>Blue LED will blink once every three seconds to indicate Zymkey is connected and configured.</td>
</tr>
<tr>
<td>5</td>
<td><strong>Developer Mode</strong></td>
<td>DEVELOPER MODE- bindings are temporary, Zymkey can be moved to different hosts and SD Cards.</td>
</tr>
<tr>
<td>6</td>
<td><strong>Production Mode</strong></td>
<td>PRODUCTION MODE- binding is permanent! Zymkey can NOT be moved to different hosts or SD Cards. Transition to Production Mode by cutting Lock Tab.</td>
</tr>
</tbody>
</table>


<h1 id="scope">Scope</h1>
<p>In this Getting Started Guide we describe how to install your Zymkey 4i to a Raspberry Pi or Jetson Nano/ Xavier running Rasbian or Ubuntu. The installation process is the same for both of these Linux distributions. </p>
<p><strong><a href="https://community.zymbit.com/c/operating-system/23">Learn about Linux OS support for Zymkey.</a></strong></p>
<hr>

## <span class="markdown-h2 include-toc">0. Hardware &amp; Connectors</span>
<h2 id="0-hardware-connectors">0. Hardware &amp; Connectors</h2>

<p><img src="../ZK4-top-bottom.png" alt="Zymkey Hardware"></p>

<hr>
## <span class="markdown-h2 include-toc">1. Battery Installation (Recommended)</span>
<h2 id="1-battery-installation-recommended-">1. Battery Installation (Recommended)</h2>
<p>Your Zymkey 4i  can be fitted with a <strong>3V CR1025  coincell</strong> battery that is used to maintain operation of the real-time-clock (RTC) and tamper detect features in the event that main power (from the GPIO header) is lost. </p>
<p>If you choose not to fit a battery, then these important security features will not function in the event main power is removed. </p>
<p><strong>Battery installation is highly recommended if your device is vulnerable to physical access !</strong></p>
<p>Use a <strong>high quality 3V CR1025</strong> coincell battery such as the <a href="https://www.mouser.com/datasheet/2/315/3635_fileversion-1627310.pdf">Panasonic - CR-1025EL, LITHIUM MANGANESE DIOXIDE</a>. </p>
<p><strong>IMPORTANT:</strong> Note the correct polarity with <strong>+ve  facing upwards !!</strong></p>

<p><img src="../ZK4-battery-install.png" alt="Battery Install"></p>

<hr>
## <span class="markdown-h2 include-toc">2. Hardware Installation</span>
<h2 id="2-hardware-installation">2. Hardware Installation</h2>
<p><strong>Power down your Raspberry Pi or NVIDIA Jetson first!</strong></p>
<p><strong>IMPORTANT:</strong> Installing your hardware correctly is important to avoid destroying your SBC or Zymkey. 
Be sure to follow the images below to ensure the first 10 GPIO pins are correctly aligned with the Zymkey header. Note: the coin cell battery should be facing up.</p>

<p><img src="../ZK4-hw-install-1.png" alt="Zymkey RPi Hardware Install" width="50%"><img src="../ZK4-hw-install-nvidia-1.png" alt="Zymkey Jetson Hardware Install" width="50%"></p>
<p><img src="../ZK4-hw-install-2.png" alt="Zymkey RPi Hardware Install 2" width="50%"><img src="../ZK4-hw-install-nvidia-2.png" alt="Zymkey Jetson Hardware Install 2" width="50%"></p>

<p>Fit the Zymkey 4i with LED and battery holder facing upwards. Be sure the black connector is properly aligned with the first 10 GPIO pins and that pressed firmly down onto the header. If misaligned, this could cause damage to the Zymkey and/or your Raspberry Pi. Your Zymkey should fit relatively snug and maintain a tight interference fit around the pins.</p>
<p>Zymkey occupies 10 pins on the GPIO header. It can also be used with other GPIO devices attached, or other i2c devices attached. See options later for correct address range and use of IO pins.</p>

<p><img src="../ZK4-pinout.png" alt="Zymkey Pinout"></p>

<blockquote>
<h2 id="using-an-alternative-gpio-pin">Using an alternative GPIO pin</h2>
<p>The default configuration uses GPIO4. This can be reconfigured to use another GPIO of your choice. 
<a href="https://community.zymbit.com/t/589"><strong>Learn more&gt;</strong></a></p>
<h2 id="using-an-alternative-i2c-address">Using an alternative I2C address</h2>
<p>The default I2C address for Zymkey is 0x30. If this conflicts with another device in your system, you can reconfigure the Zymkey to use another address of your choice.
<a href="https://community.zymbit.com/t/639"><strong>Learn more&gt;</strong></a></p>
</blockquote>

<hr>
<p><strong>Option (RPi):</strong> Using Zymkey with another Pi Plate fitted.

<p><img src="../ZK4-pi-fitted.png" alt="Zymkey Pi Plate Fitted"> </p>

<h3 id="power-on-confirm-operation">Power On, Confirm Operation</h3>
<p>Finally, power up the device and you will see a blue LED blinking rapidly and consistently (5 blinks per second)</p>

<p><img src="../ZK-LED-power.gif" alt="Zymkey LED 5 per sec"> </p>

<hr>
<h4 id="zymkey-operational-but-not-configured">Zymkey operational, but not configured</h4>
<p>(If the blue LED blinks erratically, or not at all, then there is an installation error and you should check your connections.)</p>

<hr>

<h3 id="power-quality">Power Quality</h3>
<p>Power quality matters to the reliable and secure operation of your system and Zymkey.
<a href="https://community.zymbit.com/t/243"><strong>Learn more&gt;</strong></a></p>

<hr>

## <span class="markdown-h2 include-toc">3. Configure the I2C Bus</span>
<h2 id="3-configure-the-i2c-bus">3. Configure the I2C Bus</h2>
<h3 id="i2c-rpi">For Raspberry Pi</h3>
<p>For Raspbian Operating Systems you must configure the state of the I2C bus to &quot;ON&quot;. </p>
<p>For Ubuntu Operating Systems, the I2C bus is automatically configured and you may skip this step.</p>
<p>For Raspbian OS:</p>
<ol>
<li>Log in to your SBC and run <code>sudo raspi-config</code></li>
<li>Select Interfacing Options -&gt; I2C -&gt; 
Would you like the ARM I2C interface to be enabled? select  (Yes), enter, enter</li>
<li>Arrow Right to Finish</li>
</ol>
<p>Your I2C bus is now configured and ready to talk to the Zymkey. Next install the Zymkey interface software (ZKIFC) onto your Pi. </p>
<p>The default I2C address for Zymkey is 0x30.</p>
<p><strong>IMPORTANT: The default mode for the cpu scaling governor is ondemand. There have been some issues with the interaction between the zymkey and the I2C bus, when the governor is set to ondemand. We highly recommend to switching the governor to performance to get the most out of the zymkey. 
<a href="https://community.zymbit.com/t/dev-team-known-issues/996">How to set cpu governor to performance.</a></strong></p>

<h3 id="i2c-jetson">For NVIDIA Jetson Nano/ Xavier</h3>
<p>For the Jetson the Operating System - Tegra - is based on Ubuntu. The I2C bus is enabled by default. There are no additional steps required.</p>
<p>The default I2C address for Zymkey is 0x30.</p>
<p>Next install the Zymkey interface software (ZKIFC) onto your SBC. </p>

<hr>

## <span class="markdown-h2 include-toc">4. Software Package Installation &amp; API</span>
<h2 id="4-software-package-installation-api">4. Software Package Installation &amp; API</h2>

<p>Login to your host device.</p>
<p>NOTE: Your Zymkey will require a number of packages to be installed from the Raspberry Pi/ Canonical and Zymbit apt repositories. The following setup script will be installing a number of files and software packages on your system:</p>
<ul>
<li>Zymbit .service files located in the /etc/systemd/system directory</li>
<li>pip</li>
</ul>

<p>Make sure curl is installed (typically not included with Tegra [Ubuntu 18.04] by default):</p>
<p><code>sudo apt install curl</code></p>

<p>Download and install the necessary Zymbit services onto your device. 
<code>curl -G https://s3.amazonaws.com/zk-sw-repo/install_zk_sw.sh | sudo bash</code>

(grab a cup of coffee because this will take between 4 and 20 minutes).</p>


<h3 id="binding-device-id-and-authentication-">Binding, Device ID and Authentication.</h3>
<p>Good security begins with assigning each device a unique and unalterable identity (Device ID), that is used to authenticate subsequent interactions with the device. </p>
<p>Zymkey generates a unique Device ID by measuring certain attributes of the specific host Raspberry Pi/ Jetson (Measurement), and then combining that Measurement with the unique ID of a specific Zymkey. The combination process uses a cryptographic function and this process is generally termed &quot;binding&quot;. On completion of a binding process, then Zymkey is said to be &quot;bound&quot; to the Pi.  </p>
<p> Zymkey supports two operating modes: </p>
<ol>
<li>Developer Mode: bindings are temporary, zymkey can be moved to different Pi/ Jetson hosts and SD Cards </li>
<li>Production Mode: binding is permanent!  zymkey  can <strong>NOT</strong> be moved to different Pi/ Jetson hosts or SD cards</li>
</ol>

## <span class="markdown-h2 include-toc">5. Developer Mode</span>
<h2 id="5-developer-mode-temporary-binding-">5. Developer Mode (temporary binding)</h2>
<p>When the software installation has completed, reboot your device. After the reboot has completed, the Pi/ Jetson will perform an operation that will temporarily bind the Zymkey to your SBC. Once the Zymkey is bound to the SBC, the Zymkey&#39;s blue LED should blink slowly - once every 3 seconds - to indicate that the binding is complete. </p>

<p><img src="../ZK-LED-bound.gif" alt="Zymkey LED once per 3 sec"> </p>

<h4 id="zymkey-operational-temporary-binding-to-host-zymkey-in-developer-mode-">Zymkey operational, temporary binding to host (Zymkey in Developer Mode)</h4>
<p>At this point, your Zymkey is now in Developer Mode, the binding is temporary and the Zymkey can be moved to another Pi/ Jetson and the binding process repeated. </p>

<hr>

## <span class="markdown-h2 include-toc">6. Production Mode</span>
<h2 id="6-production-mode-permanent-binding-">6. Production Mode (permanent binding)</h2>
<p>When you have completed all your development work and you are ready to deploy your system into the field we recommend that you permanently bind your Zymkey to a &#39;specific host device and SD card &#39;.</p>
<p><strong>WARNING: THIS BINDING PROCESS IS PERMANENT AND CANNOT BE REVERSED. PAY ATTENTION TO  THE FOLLOWING:</strong></p>
<ul>
<li><p>Your specific Zymkey will be locked to the specific host device and it is impossible to move or bind your Zymkey to another device. There are no factory resets, masterkeys or other forms of recovery. </p>
</li>
<li><p>If you are using the perimeter_detect features, then the sequence in which you arm, disarm is very important. Be sure to follow the process steps below.</p>
</li>
<li><p>Once you have locked your Zymkey into production mode, zymbit cannot guarantee its operation if you subsequently do a major distribution upgrade (e.g. Raspbian Jessie to Stretch).** <a href="https://zymbit.com/contact-form/">Contact Zymbit for more information.</a></p>
</li>
<li><p>If you decide that you are not ready for permanent binding then leave it in developer mode, but beware this makes it easier for a bad actor to replace the host with a rogue hardware.</p>
</li>
</ul>
<h3 id="-moving-from-developer-mode-to-production-mode-"><strong>Moving from Developer Mode to Production Mode</strong></h3>
<h4 id="with-zymkey-in-developer-mode-lock-tab-in-place-">With Zymkey in Developer Mode (Lock Tab in Place)</h4>
<p>Do not cut the Lock Tab yet!</p>
<ol>
<li>Install the battery on Zymkey</li>
<li>Place Zymkey onto the GPIO header (with power down on the device)</li>
<li>Turn on the SBC</li>
<li>Install and bind the Zymkey and SBC</li>
<li>Set Perimeter Event Actions to “none” or “notify only”</li>
<li>Create your LUKS encrypted volume</li>
<li>Install your applications into your encrypted volume</li>
<li>Confirm your system and applications work fully as you intend</li>
</ol>

<h4 id="when-you-are-ready-to-move-zymkey-to-production-mode-">When you are ready to move Zymkey to Production Mode,</h4>
<p>Do not cut the Lock Tab yet!</p>
<ol>
<li>Turn off the power to the SBC.</li>
<li>Do not remove the battery.</li>
<li>Remove the Zymkey from the SBC</li>
<li>Now Cut the Lock Tab</li>
<li>Replace the Zymkey onto the SBC and turn on power to the SBC</li>
<li>Close your perimeter circuit(s) (enclosure lid)</li>
<li>Clear Perimeter Detect Events</li>
<li>Get Perimeter Detect Info to confirm prior events are cleared and the perimeter is closed.</li>
<li>If the Perimeter Detect Event returns clear, then you can ‘arm your system’ as you require by setting  Set Perimeter Event Actions to “none”, “notify” or “selfdestruct”</li>
<li><strong>Your system is now armed.</strong></li>
</ol>
<h3 id="manual-cut-2-lock">Manual Cut-2-Lock</h3>
<p><strong>IMPORTANT:</strong> first power down your device and Zymkey. Removing the Cut-2-Lock tab can be done in situ, or by removing the Zymkey from the SBC. <strong><em>Also insure that your perimeter detect actions are not set to self-destruct mode.</em></strong> Follow the steps outlined above, and refer to the programming api documents for more information on the operation of Perimeter Detect Events. </p>
<h4 id="cut-using-sharp-diagonal-cutter-pliers">Cut using sharp diagonal cutter pliers</h4>

<p><img src="../ZK-cut-tab-1.png" alt="Zymkey Cut Tab 1"></p>
<hr>
<h4 id="cut-along-guide-notches">Cut along guide notches</h4>

<p><img src="../ZK-cut-tab-2.png" alt="Zymkey Cut Tab 2"></p>

<hr>
<h4 id="finished-cut-should-be-flush-to-edge-">Finished cut should be flush to edge.</h4>
<p><img src="../ZK-cut-tab-3.png" alt="Zymkey Cut Tab 3"></p>
<h4 id="once-you-have-successfully-cut-the-lock-tab-and-have-rebooted-your-system-the-blink-pattern-will-change-to-3-rapid-blinks-once-every-3-seconds-to-indicate-that-zymkey-has-bound-to-the-host-in-production-mode-">Once you have successfully cut the lock tab and have rebooted your system, the blink pattern will change to 3 rapid blinks once every 3 seconds to indicate that Zymkey has bound to the host in production mode.</h4>
<hr>

## <span class="markdown-h2 include-toc">Additional Resources</span>

<h2 id="perimeter-detect">Perimeter Detect</h2>
<p>Refer to <a href="https://community.zymbit.com/c/zymkey/63/">Using Perimeter Detect</a></p>
<hr>
<h2 id="api-documentation">API Documentation</h2>
<p>API&#39;s are available for Python, C, C++
<a href="https://docs.zymbit.com/api/api_docs_intro/">Go to API Documents &gt;</a>  </p>
<hr>
<h2 id="application-examples">Application Examples</h2>
<p>The quickest way to get started is to see the various methods at work by running these scripts:
<code>python /usr/local/share/zymkey/examples/zk_app_utils_test.py</code>
<code>python /usr/local/share/zymkey/examples/zk_crypto_test.py</code></p>
<p>Please read the Zymkey community pages for documentation on:</p>
<ul>
<li><a href="https://community.zymbit.com/t/encrypt-your-root-file-system-on-raspberry-pi/150">LUKS filesystem encryption</a></li>
<li><a href="https://community.zymbit.com/t/zymkey-encrypting-decrypting-sensor-data-on-disk/94">Encrypting &amp; decrypting sensor data on disk</a></li>
<li><a href="https://community.zymbit.com/t/zymkey-rtc-real-time-clock-support/84">Real Time Clock</a></li>
</ul>
